"use client"
import React, { useState } from 'react'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { accountSchema } from '@/app/lib/schema';
import { Input } from './input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import { Switch } from './switch';
import { Button } from './button';

const CreateAccountDrawer = ({ children }) => {
    const [open, setOpen] = useState(false);
    const { register, handleSubmit, formState: { errors },
        setValue, watch, reset } = useForm({
            resolver: zodResolver(accountSchema),
            defaultValues: {
                name: "",
                type: "CURRENT",
                balance: "",
                isDefault: false,
            }
        })
        const onSubmit=async(data)=>{
            console.log(data)
        }
    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>{children}</DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Create New Account</DrawerTitle>

                </DrawerHeader>
                <div className="pb-4 px-4">
                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">
                                Account Name

                            </label>
                            <Input id="name" plceholder="e.g,Main Checking" {...register("name")} />
                            {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="type" className="text-sm font-medium">
                                Account Type

                            </label>
                            <Select
                                onValueChange={(value) => setValue("type", value)}
                                defaultValue={watch("type")}
                            >
                                <SelectTrigger id="type">
                                    <SelectValue placeholder="Select Account Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="CURRENT">Current</SelectItem>
                                    <SelectItem value="SAVINGS">Savings</SelectItem>

                                </SelectContent>
                            </Select>

                            {errors.type && <p className="text-sm text-red-500">{errors.type.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="balance" className="text-sm font-medium">
                                Initial Balance

                            </label>
                            <Input id="balance" type="number" step="0.01" placeholder="e.g,1000" {...register("balance")} />
                            {errors.balance && <p className="text-sm text-red-500">{errors.balance.message}</p>}
                        </div>
                        <div className="flex items-center justify-between rounded-lg border p-3">
                            <div className="space-y-0.5">
                                <label htmlFor="name" className="text-sm font-medium cursor-pointer">
                                    Set as Default

                                </label>
                                <p className="text-sm text-muted-foreground">
                                    This account will be set as default for new transactions.
                                   
                                </p>

                            </div>
                            <Switch id="isDefault"
                                        onCheckedChange={(value) => setValue("isDefault", value)}

                                        checked={watch("isDefault")} />



                        </div>
                        <div className="flex gap-4 pt-4">
                            <DrawerClose asChild>
                                <Button type="button" variant="outline" className="flex-1">
                                    Cancel
                                </Button>

                            </DrawerClose>
                            <Button type="submit" className="flex-1">
                                Create Account
                            </Button>
                            
                        </div>

                    </form>

                </div>

            </DrawerContent>
        </Drawer>
    )
}

export default CreateAccountDrawer
