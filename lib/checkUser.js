import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";
export const checkUser=async()=>{
    const user=await currentUser();
    if(!user) return null;
    try{
        const loggedUser=await db.user.findUnique({
            where:{
                clerkUserId:user.id
            }
        });
        if(loggedUser) return loggedUser;
        const name=`${user.firstName} ${user.lastName}`;
        const newUser=await db.user.create({
            data:{
                clerkUserId:user.id,
                email:user.emailAddresses[0].emailAddress,
                name,
                imageUrl:user.imageUrl
            }
        })
        return newUser;

    }
    catch(error){
        console.error("Error checking user",error);

    }

}