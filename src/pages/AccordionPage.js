import Accordion from '../components/Accordion';


const sample = [
    {
        id:"sasdfha",
        title:"Title 1",
        content:"This is a long content."
    },
    {
        id:"sasdfhd",
        title:"Title 2",
        content:"This is another long content"
    },
    {
        id:"sasdfhc",
        title:"Title 3 ",
        content:"This is yet another long content"
    },
    {
        id:"sasdfhe",
        title:"Title 4",
        content:"Uggh.. this should be the last one.."
    },
]


function AccordionPage(){
    return <>
        <div className='m-4'>
            <Accordion items={sample} key={sample.id}/>
        </div>
        </>
}

export default AccordionPage;