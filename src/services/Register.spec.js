export async function registerUser(firstName, lastName, username, password) {
    const response = await fetch('http://localhost:5000/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "first_name": firstName,
            "last_name": lastName,
            "username": username,
            "password": password
        }),
    });

    if (response.status === 201) {
        return response.json();
    }

    throw new Error('Failed to register user');
}