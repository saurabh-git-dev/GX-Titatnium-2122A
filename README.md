# GX Titanium 2122A Bridge Mode

## Version:
**HW: C40-210**, **SW: T2122-V1.24A**

## Steps

1. Remove the "disabled" attribute manually from input fields and buttons or use JavaScript code to remove it dynamically. (I have created a basic Chrome extension to remove the "disabled" attribute from all HTML elements when I visit the router page.)
2. Go to the WAN page. (Every disabled field should be enabled now. In case you don't have the PPPoE password, you can inspect the PPPoE password field by right-clicking and getting the value from the input field. It's just hidden on the UI.)
3. Open the Browser Inspect Tool.
4. Go to the Sources tab in the Inspect section.
5. Locate `contentfrm` (net-wanset.asp) in the left tab.
6. In `contentfrm` -> `cgi-bin` -> `net-wanset.asp`
7. Click and open `net-wanset.asp`.
8. Add a breakpoint on lines 1562 and 3539.
9. Add variables in the "Watch" section:
    - `access_code=1`
    - `CurWan=[]`
10. Now click on "Apply" to test. The request will be processed and the page should be refreshed. If that happens, then it means everything is working.

## Load Extension
1. The `chrome-extension` directory contains extension configuration and script that removes `disabled` attribute from html.
2. Open Chrome and Navigate to Extension Section.
3. Enable Developer Mode (if not enabled).
4. Then Open `Load Unpack` Option and select `chrome-extension` directory. The extension will be loaded.


**NOTE:**
Please take a screenshot of the previous configuration and PPPoE details before doing anything. Although after resetting the router, it should be set again, I think.
