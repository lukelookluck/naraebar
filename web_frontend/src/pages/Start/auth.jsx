const users = [
    { id: "test", pw: "123", name: "Kim" },
    { id: "admin", pw: "456", name: "Lee" },
]

export function signIn({ id, pw }) {
    const user = users.find(
        (user) => user.id === id && user.pw === pw
    )
    if (user === undefined) throw new Error()
    return user
}