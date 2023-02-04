export default async function getFetch (url) {
        const a = await fetch(url)
        return await a.json()
}   