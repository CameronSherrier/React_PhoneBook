const token = '29edb5d95ee672e68c55a4da885caab8acd00e57d8ba5230'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://hotline-bling.glitch.me/api/contacts`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://hotline-bling.glitch.me/api/contacts`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        if (!response.ok)  {
            throw new Error("We are having a little trouble creating the data 😐")
        }
        
        return await response.json()
    },

    update: async (id: string, data: any = {}) => {
        const response = await fetch(`https://hotline-bling.glitch.me/api/contacts/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error("Yeah, it didn't update 👎")
        }
        
        return await response.json()
    },

    delete: async (id: string) => {
        const response = await fetch(`https://hotline-bling.glitch.me/api/contacts/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }
        })

        if (!response.ok) {
            throw new Error("We can't quite delete that contact just yet 🤷")
        }

        return;
    },
}