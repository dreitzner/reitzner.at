export async function onRequestGet({ env }) {
	let devToJson = [];

    const devTo = await fetch(
        'https://dev.to/api/articles?username=dreitzner',
        {
            headers: {
                'api-key': `${env.VITE_DEVTO_API_KEY}`,
            },
            // mode: 'cors', // no-cors, *cors, same-origin
            // credentials: 'same-origin', // include, *same-origin, omit
            cf: {
            	// Always cache this fetch regardless of content type
            	// for a max of 60 seconds before revalidating the resource
            	cacheTtl: 60,
            	cacheEverything: true,
            },
        }
    )
    console.log('DevTo Request:', devTo.ok)
    if(devTo.ok){
        devToJson = (await devTo.json()).map(article => {
            return {
                url: article.url,
                title: article.title,
                image: article.cover_image,
                date: article.created_at,
            }
        });
    } else {
        devToJson.push({
            url: devTo.ok,
            title: devTo.ok,
            image: devTo.ok,
            date: devTo.ok,
            data: devTo,
        }) 
    }
    return new Response(JSON.stringify(devToJson), null, 2);
}
