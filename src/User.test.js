import { render } from "@testing-library/react"
import User from "./User"
import React from 'react'

test('Exemple test', function(){
    render(<User 
        key="Clé-test"
        login="Utilisateur_Test"
        password="Mo5up3rPàssw0rd2T3st"
        role="Role_Test"
        firstName="Test"
        lastName="O'Stérone"
        team="Test_Team">
            <div id="test"></div>
        </User>)
        const demo = document.querySelector("test")
    expect(demo).not.toBeNull()
})