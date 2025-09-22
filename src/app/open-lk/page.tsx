"use client"
import { handle_get_cookie } from "@/shared/server-functions";
import { useSearchParams } from "next/navigation";
import React from "react";

function OpenLK() {
    const searchParams = useSearchParams()

    const handleRedirectToNovaaDesktop = React.useCallback(async () => {
        if (searchParams.get('tkn')) {
            const scope = await handle_get_cookie('nva-lgn-scp')
            if (!scope) {
                return location.assign(location.origin)
            }
            location.assign(`dome.computers.novaa://?tkn=${searchParams.get('tkn')}&scope=${scope}`)            
        }else{
            location.assign(location.origin)
        }
    }, [searchParams]) // Added searchParams to dependency array

    React.useLayoutEffect(() => {
        handleRedirectToNovaaDesktop() // Actually using the function
    }, [handleRedirectToNovaaDesktop])

    return(
        <div>
            Continue in the Novaa desktop
        </div>
    )
}

export default React.memo(OpenLK)