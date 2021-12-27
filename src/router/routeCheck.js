export function checkCurrentRoute(router, path) {
    const {currentRoute: {path: curPath}} = router;
    if (curPath !== path) router.push({path});
}