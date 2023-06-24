"use client"

import Button from "@/components/Button";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AccountContent = () => {
    const router = useRouter();
    const { isLoading, user } = useUser();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!isLoading && !user) {
          router.replace('/');
        }
      }, [isLoading, user, router]);

      const redirectToCustomerPortal = async () => {
        setLoading(true);
        try {
          window.location.href = 'https://www.instagram.com/evilmonarch13/' ;
        } catch (error) {
          if (error) return alert((error as Error).message);
        }
        setLoading(false);
      };
    
    return (
        <div className="mb-7 px-6">
            <div className="flex flex-col gap-y-4">
                <p>You are currently on the Monarch Free Spotify Plan.</p>
            </div>
            <Button 
                disabled={loading || isLoading}
                onClick={redirectToCustomerPortal}
                className="w-[300px]"
            >
                Click to Follow
            </Button>
        </div>
    );
}

export default AccountContent;