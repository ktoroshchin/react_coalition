import { Accordion, Icon, Menu } from "semantic-ui-react";
import { useState } from 'react'

function AccordionMenu() {
    const [index, setIndex] = useState(null)

    function handleClick(e, props) {
        console.log(e)
        if (index === 0) {
            setIndex(null)
        } else {
            setIndex(0)
        }
    }

    return (
        <Accordion fluid styled>
            <Accordion.Title
                active={index === 0}
                index={0}
                onClick={(e) => handleClick(e)}
            >
                <Icon name='dropdown' />
                MOUNTAINS
            </Accordion.Title>
            <Accordion.Content active={index === 0}>
            <Menu className='hero_2__menu'>
                <Menu.Item>
                    MOUNTAIN 1
                </Menu.Item>

                <Menu.Item
                >
                    MOUNTAIN 2
                </Menu.Item>
                </Menu>
            </Accordion.Content>
        </Accordion>
    )
}

export default AccordionMenu;