const { expect } = require("chai");
const { describe } = require("mocha");

describe('Testing Simple App', () =>{

    beforeEach(() => {
        cy.visit('../index.html');
    })

    it('Adding two +ve number', () =>{
        cy.get('#num1').type('1');
        cy.get('#num2').type('2');
        cy.get('#mybtn').click();
        cy.get('#result').should(($result) =>{
            var x = $result.val();
            expect(x).to.equal('3');
        });
    });
    it('Adding +ve and -ve number', () =>{
        cy.get('#num1').type('3');
        cy.get('#num2').type('-4');
        cy.get('#mybtn').click();
        cy.get('#result').should(($result) =>{
            var x = $result.val();
            expect(x).to.equal('-1');
        });
    });
    it('Adding two floating point numbers', () =>{
        cy.get('#num1').type('2.5');
        cy.get('#num2').type('3.2');
        cy.get('#mybtn').click();
        cy.get('#result').should(($result) =>{
            var x = $result.val();
            expect(x).to.equal('5.7');
        });
    })
    it('Input other than number', () =>{
        cy.get('#num1').type('qwe');
        cy.get('#num1').should(($num1) =>{
            expect($num1.val()).to.equal('');
        })
        cy.get('#num2').type('qwe');
        cy.get('#num2').should(($num1) =>{
            expect($num1.val()).to.equal('');
        })
    });
})