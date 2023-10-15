// import React, { useState, useEffect } from "react";
// import { Brightness4, Brightness7 } from "@material-ui/icons";

// export default function ThemeSettings({ theme, toggleTheme }) {
//     useEffect(() => {
//         const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
//         if (prefersDarkMode.matches) {
//             toggleTheme("dark");
//         }
//     }, [toggleTheme]);

//     return (
//         <div className="themeSettings">
//             <div className="themeIconContainer" onClick={toggleTheme}>
//                 {theme === "light" ? <Brightness4 /> : <Brightness7 />}
//             </div>
//         </div>
//     );
// }
