"use client";
import { get_novaa_desktop_token } from "@/shared/server-functions";
import React from "react";

const OpenLk = React.memo((/* props: any */) => {
  const [loading, set_loading] = React.useState<boolean>(true);

  const handle_rdr_to_novaa_desktop = React.useCallback(async () => {
    const get_session = await get_novaa_desktop_token();
    set_loading(false);
    if ("jwt" in get_session && "scope" in get_session) {
      location.assign(
        `dome.computers.novaa://?tkn=${get_session.jwt}&scope=${get_session.scope}`
      );
    } else {
      location.assign(location.origin);
    }
  }, []); // Added searchParams to dependency array

  React.useLayoutEffect(() => {
    handle_rdr_to_novaa_desktop();
  }, [handle_rdr_to_novaa_desktop]);

  return (
    <div className="h-[100vh] w-full flex items-center justify-center">
      {loading ? (
        <div className="flex flex-col items-center">
          <div className="max-w-[600px] font-bold animate-pulse text-center">
            You will redirected to Novaa desktop shortly, please wait...
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-2">
          <div className="max-w-[600px] font-bold [&>div]:text-center">
            <div>
              You will be redirected to Novaa Desktop to complete the Sign In
              process
            </div>
            <div className="text-sm text-neutral-900/70">
              Click the button below if you're not automatically redirected
              after few seconds
            </div>
          </div>
          <div>
            <button
              onClick={handle_rdr_to_novaa_desktop}
              className="cursor-pointer font-[600] border-none outline-none text-amber-200 bg-amber-700 py-2 rounded-[8px] px-4 text-xs"
            >
              Complete in Novaa Desktop
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                location.assign(location.origin);
              }}
              className="cursor-pointer font-[600] border-none outline-none text-amber-200 bg-amber-700 py-2 rounded-[8px] px-4 text-xs"
            >
              Go to dome.computer homepage
            </button>
          </div>
        </div>
      )}
    </div>
  );
});

export default OpenLk;
