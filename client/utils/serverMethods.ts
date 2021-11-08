export const server = {
    url: 'http://localhost:3000',

    async getData(url: string): Promise<void> {
        try {
            const response = await fetch('http://localhost:3000' + url);
            return await response.json();
        } catch (error) {
            console.error(error);
        }
    },

    async sendData(url: string, data: string | unknown): Promise<void> {
        try {
            const response = await fetch('http://localhost:3000' + url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
            });
            return await response.json();
        } catch (error) {
            console.error(error);
        }
    },

    async changeData(url: string, data: string | unknown): Promise<void> {
        try {
            const response = await fetch('http://localhost:3000' + url, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
            });
            return await response.json();
        } catch (error) {
            console.error(error);
        }
    },

    async deleteData(url: string): Promise<void> {
        try {
            const response = await fetch('http://localhost:3000' + url, {
                method: 'DELETE',
            });
            return await response.json();
        } catch (error) {
            console.error(error);
        }
    },
};
