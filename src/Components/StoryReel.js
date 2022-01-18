import React from 'react';
import '../CSS/StoryReel.css';
import Story from './Story';

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story image="https://cdn140.picsart.com/327464379069201.jpg?type=webp&to=crop&r=256"
            profileSrc="https://cdn131.picsart.com/323779276307201.jpg?type=webp&to=crop&r=256"
            title="Model" />

            <Story image="https://cdn131.picsart.com/315934060092201.jpg?type=webp&to=crop&r=256"
            profileSrc="https://cdn131.picsart.com/323038550298201.jpg?type=webp&to=crop&r=256"
            title="Bearded Guy" />

            <Story image="https://cdn.elnacional.com/wp-content/uploads/2021/10/Facebook-Meta-Zuckerberg.jpeg"
            profileSrc="https://s.yimg.com/ny/api/res/1.2/kYWtnFgjS.t9emWmFhAy7w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MA--/https://s.yimg.com/uu/api/res/1.2/oYpLir0ccuTUeBK0Gl4NUw--~B/aD0zMjc2O3c9NDkxNDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/rollingstone.com/c4e8d152d36f2f87d1aad34675da03a1"
            title="Mark Zuckerberg" />

            <Story image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIICoq0hDvFPzTCBPMXB4p2KNcuguQSNFaVg&usqp=CAU"
            profileSrc="https://www.wired.com/wp-content/uploads/2019/01/Culture_GeeksGuide_Bezos.jpg"
            title="Jeff Bezos" />

            <Story image="https://images.theconversation.com/files/377355/original/file-20210106-15-1yaozup.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
            profileSrc="https://image.cnbcfm.com/api/v1/image/104225995-_95A5004.jpg?v=1540458420&w=929&h=523"
            title="Jack Ma" />

        </div>
    )
}

export default StoryReel
