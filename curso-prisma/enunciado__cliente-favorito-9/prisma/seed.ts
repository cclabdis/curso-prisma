import prisma from "database";


async function main(){
    return prisma.customer.upsert({
        
    })

}

main()
.then(async() =>{
    await prisma.$disconenct();
})
.catch(async(e) =>{
    console.log(e)
    await prisma.$disconenct();
    process.exit(1)
})
prisma