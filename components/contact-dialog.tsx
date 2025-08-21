'use client';

import { Phone, Copy, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";

export default function ContactDialog() {
    const [copiedItem, setCopiedItem] = useState<string | null>(null);

    const handleCopy = async (text: string, item: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedItem(item);
            setTimeout(() => setCopiedItem(null), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default">
                    <MdEmail className="text-lg" />
                    <span className="text-sm">Contact</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Get In Touch
                    </DialogTitle>
                    <DialogDescription className="text-gray-600">
                        Feel free to reach out through any of these channels. I'd love to connect!
                    </DialogDescription>
                </DialogHeader>
                
                <div className="flex flex-col gap-3 mt-4">
                    <ContactItem
                        title="Email"
                        description="ryanleitenberger@yahoo.com"
                        copiedItem={copiedItem}
                        Icon={MdEmail}>
                        <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleCopy('ryanleitenberger@yahoo.com', 'email')}
                            className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <Copy className="w-3 h-3" />
                        </Button>
                    </ContactItem>

                    <ContactItem
                        title="Phone"
                        description="(814) 659-7961"
                        copiedItem={copiedItem}
                        Icon={Phone}>
                        <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleCopy('8146597961', 'phone')}
                            className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <Copy className="w-3 h-3" />
                        </Button>
                    </ContactItem>


                    <ContactItem
                        title="LinkedIn"
                        description="ryan-leitenberger"
                        copiedItem={copiedItem}
                        Icon={BiLogoLinkedin}>
                        <Link href="https://www.linkedin.com/in/ryan-leitenberger-40b479208/" target="_blank" rel="noopener noreferrer">
                            <Button
                                size="sm"
                                variant="ghost"
                                className="opacity-0 group-hover:opacity-100 transition-opacity">
                                <ExternalLink className="w-3 h-3" />
                            </Button>
                        </Link>
                    </ContactItem>
                </div>
            </DialogContent>
        </Dialog>
    )
}

const ContactItem = ({ 
    title, 
    description, 
    copiedItem, 
    children,
    Icon
}: { 
    title: string, 
    description: string, 
    copiedItem: string|null, 
    children: React.ReactNode;
    Icon: React.ElementType;
}) => {
    return (
        <div className="group relative p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 bg-gradient-to-r from-blue-50/50 to-cyan-50/50">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700">
                        <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-900">{title}</p>
                        <p className="text-sm text-gray-600">{description}</p>
                    </div>
                </div>
                <div className="flex gap-1">
                    {children}
                </div>
            </div>
            {copiedItem === title.toLowerCase() && (
                <Badge variant="secondary" className="absolute -top-2 -right-2 text-xs bg-green-100 text-green-800">
                    Copied!
                </Badge>
            )}
        </div>
    )
}