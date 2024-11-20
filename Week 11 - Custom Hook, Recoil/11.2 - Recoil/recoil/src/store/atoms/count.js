import { atom, selector } from "recoil";
export const countState = atom({
  key: 'count',
  default: 0,
});

export const evenSelector = selector({
  key: "isEvenSelector",
  get: function({get})  {
    const getSelectror = get(countState);
    const isEven = getSelectror %2 == 0;
    return isEven;
  }
})
