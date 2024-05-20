// NotFoundPage.tsx
import React from 'react';
import { Button } from "../../../../../Recov/recov/@/components/ui/button"
import {  DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogContent, Dialog } from "../../../../../Recov/recov/@/components/ui/dialog"
import { Label } from "../../../../../Recov/recov/@/components/ui/label"
import { Input } from "../../../../../Recov/recov/@/components/ui/input"
import { Textarea } from "../../../../../Recov/recov/@/components/ui/textarea"
import {Link} from 'react-router-dom'
import {PageIcon} from "../../../../../Recov/recov/public/pageIcon/pageIcon"

export function NotFoundPage() {
    return (
        <div className="flex h-[100dvh] flex-col items-center justify-center gap-8 bg-white px-4 dark:bg-gray-950">
            <div className="flex h-96 w-96 items-center justify-center rounded-full bg-gray-100 shadow-lg dark:bg-gray-800">
                <PageIcon className="h-64 w-64 text-gray-500 dark:text-gray-400" />
            </div>
            <div className="space-y-6 text-center">
                <h1 className="text-6xl font-bold tracking-tighter text-gray-900 dark:text-gray-50">Oops, page not found</h1>
                <p className="text-3xl text-gray-500 dark:text-gray-400">
                    The item you're looking for seems to have gone missing. Let us help you find it.
                </p>
            </div>
            <div className="flex gap-4">
                <Link
                    className="inline-flex h-24 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    to="/home"
                >
                    <p className="text-2xl">Go back home</p>
                </Link>
                <Dialog>
                    <DialogContent className="w-full max-w-md">
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-bold">Report a lost item</DialogTitle>
                            <DialogDescription className="text-lg text-gray-500 dark:text-gray-400">
                                Please provide details about the item you've lost.
                            </DialogDescription>
                        </DialogHeader>
                        <div>
                            <form className="grid gap-6">
                                <div className="grid gap-2">
                                    <Label className="text-base font-medium" htmlFor="item-name">
                                        Item Name
                                    </Label>
                                    <Input
                                        className="rounded-md bg-gray-100 p-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:bg-gray-800 dark:text-gray-50 dark:placeholder:text-gray-400 dark:focus:ring-gray-300"
                                        id="item-name"
                                        placeholder="Enter the item name"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label className="text-base font-medium" htmlFor="item-description">
                                        Description
                                    </Label>
                                    <Textarea
                                        className="rounded-md bg-gray-100 p-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:bg-gray-800 dark:text-gray-50 dark:placeholder:text-gray-400 dark:focus:ring-gray-300"
                                        id="item-description"
                                        placeholder="Provide a description of the item"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label className="text-base font-medium" htmlFor="item-location">
                                        Last Known Location
                                    </Label>
                                    <Input
                                        className="rounded-md bg-gray-100 p-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:bg-gray-800 dark:text-gray-50 dark:placeholder:text-gray-400 dark:focus:ring-gray-300"
                                        id="item-location"
                                        placeholder="Enter the last known location"
                                    />
                                </div>
                            </form>
                        </div>
                        <DialogFooter className="flex justify-end gap-4">
                            <div>
                                <Button className="dark:text-gray-50 dark:hover:bg-gray-800" variant="ghost">
                                    Cancel
                                </Button>
                            </div>
                            <Button className="dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90">Submit Report</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}


export default NotFoundPage;