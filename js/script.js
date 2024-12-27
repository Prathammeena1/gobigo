function handleResponsiveRedirect() {
    const isMobile = window.innerWidth < 600;
    const currentPage = window.location.pathname;

    // console.log(c)

    // Redirect to mobile page if on laptop page and screen width is mobile
    if (isMobile && !currentPage.includes('/mobile/index.html')) {
        window.location.href = "../mobile/index.html";
    }
    // Redirect to laptop page if on mobile page and screen width is desktop
    else if (!isMobile && !currentPage.includes('/laptop/index.html')) {
        window.location.href = "../laptop/index.html";
    }
}

// Trigger on load
handleResponsiveRedirect();

// Handle dynamic resizing
window.onresize = handleResponsiveRedirect;
