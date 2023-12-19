import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./storage"

const diobank = {
    login: false
}
describe('Storage', ()=>{

    const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')

    it('should return localStorages object', () => {
        getAllLocalStorage()
        expect(mockGetItem).toHaveBeenCalledWith('diobank')
    })
    it('should create localStorage object', () => {
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(diobank))
    })
    it('should change localStorage object', ()=>{
        changeLocalStorage(diobank)
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(diobank))
    })
})