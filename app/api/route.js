export async function GET(request) {
    console.log(request?.url)
    console.log("••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••")
    console.log(request?.baseUrl)
    console.log("••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••")
    console.log(request?.origin)
    console.log("••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••")
    console.log(request?.method)
    console.log("••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••")
    console.log(request?.body)
    console.log("••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••")
    console.log(request?.cookies)
    return new Response(JSON.stringify(["Ahmed", "Mohamed", "Ali", "Eslam", "Mostafa"]))
}