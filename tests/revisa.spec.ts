import 'mocha';
import {expect} from 'chai';
import { revista } from '../src/revista/revista';
import { subscrip } from '../src/subcriptor/subscriptor';


const revista1 = new revista('Magazine', 1);
const subscrip1 = new subscrip('pepe');


describe('Clase revista', () => {
    it('getName()', () => {
        expect(revista1.getName()).to.be.eq('Magazine');
    });
    it('getNum()', () =>{
        expect(revista1.getNum()).to.be.eq(1);
    });
});

describe('Clase subscriptor', () => {
    it('getName', () =>{
        expect(subscrip1.getName()).to.be.eq('pepe');
    })
    //it('', () =>{
    //    expect();
    //});
});