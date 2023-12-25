export const useAuthorizedRoutes = (): Array<String> => {
    return [
        '/api/test/post',
        '/api/test/post/*'
    ]
}