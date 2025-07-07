"use server"

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/dist/types/server"
import { revalidatePath } from "next/cache";
const serializeTransaction=(obj)=>{
    const serialized={...obj};
    if(obj.balance){
        serialized.balance=obj.balance.toNumber();
    }
}


export async function createAccount(data){
    try{
        const {userId} = await auth();
        if(!userId){
            throw new Error("Unauthorized")
        }
        const user=await db.user.findUnique({
            where:{
                clerkUserId:userId

            }
           
        });
        if(!user){
            throw new Error("User not found")
        }
        // convert balance to float before saving
        const balanceFloat=parseFloat(data.balance);
        if(isNaN(balanceFloat)){
            throw new Error("Invalid balance")
        }

        //check if this is the user's first account
        const existingAccounts=await db.account.findMany({
            where:{
                userId:user.id
            }
        });
        const shouldCreateDefaultCategory=existingAccounts.length===0?true:data.isDefault;
        if(shouldCreateDefaultCategory){
            await db.account.updateMany({
                where:{
                    userId:user.id,
                    isDefault:true
                },
                data:{
                    isDefault:false
                }
            })
        }
        const account=await db.account.create({
            data:{
                ...data,
                userId:user.id,
                balance:balanceFloat,
                isDefault:shouldCreateDefaultCategory
            }
        });
        const serializedAccount=serializeTransaction(account);
        revalidatePath("/dashboard");
        return {sucess:true,
            data:serializedAccount
        }



    }
    catch(error){
        console.log(error)
    }

}