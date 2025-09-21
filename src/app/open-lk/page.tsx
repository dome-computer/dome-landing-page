"use client"
import { handle_get_cookie } from "@/shared/server-functions";
import { useSearchParams } from "next/navigation";
import React from "react";

export default React.memo((props: any) => {
    const searchParams = useSearchParams()

    const handle_rdr_to_novaa_desktop = React.useCallback(async () => {
        if (searchParams.get('tkn')) {
            const scope = await handle_get_cookie('nva-lgn-scp')
            if (!scope) {
                return location.assign(location.origin)
            }
            location.assign(`dome.computers.novaa://?tkn=${searchParams.get('tkn')}&scope=${scope}`)            
        }else{
            location.assign(location.origin)
        }
    }, [])

    React.useLayoutEffect(() => {
        
    }, [])

    return(
        <div>
            Continue in the Novaa desktop
        </div>
    )
})