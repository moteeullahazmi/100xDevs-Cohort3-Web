import { atom, selector } from "recoil"

export const networkAtom = atom({
    key: "networkAtom",
    default:8
})

export const jobAtom = atom({
    key: "jobAtom",
    default:10
})

export const messageAtom = atom({
    key: "messageAtom",
    default:0
})

export  const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: function({get}){
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobAtom);
        
        return networkAtomCount + jobsAtomCount ;
    }
})