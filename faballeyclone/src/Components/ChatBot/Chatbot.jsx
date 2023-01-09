import React from 'react'
import { useNavigate } from 'react-router-dom';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components'; 
 

 
const Chatbot = () => {
    const navigate = useNavigate();

    
const steps = [
    {
        id: '0',
        message: 'Hey User!',
        trigger: '1',
    }, {
        id: '1',
 
        // This message appears in
        // the bot chat bubble
        message: 'How can i Help you',
        trigger: '2'
    }, {
        id: '2',
 
        // Here we want the user
        // to enter input
        user: true,
        trigger: '3',
    }, {
        id: '3',
        message: "Click below to explore",
        trigger: 4
    }, {
        id: '4',
        options: [
             
            // When we need to show a number of
            // options to choose we create alist
            // like this
            { value: 1, label: 'View Products',trigger: 5 },
            { value: 2, label: 'Contect Faballey',trigger:7 },
 
        ],   
    }, {
        id: '5',
        message: "You can find Products in ALLSTYLES on navBar",
        trigger:6
    },{
        id: '6',
        options: [
             
            // When we need to show a number of
            // options to choose we create alist
            // like this
            // { value: 1, label: 'View Products',trigger: 5 },
            { value: 2, label: 'Contect Faballey',trigger:7 },
 
        ],   
    },
    {
        id: '7',
        message: "mail to : contect@faballey.com",
        trigger: 4,
        end: true
    }
];
 
// Creating our own theme
const theme = {
    background: 'rgb(243, 240, 240)',
    headerBgColor: 'lightblue',
    headerFontSize: '22px',
    botBubbleColor: 'rgb(255,233,229)',
    headerFontColor: 'black',
    botFontColor: 'black',
    userBubbleColor: 'pink',
    userFontColor: 'black',
};
 
// Set some properties of the bot
const config = {
    botAvatar: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAApVBMVEX8ZIb////8aIn8X4P8Y4X8WX/8XYH//f7/+fr8VHz8WH//+/z8Zob8Vn3+6u3/9ff+7/H+6ez+3+T9hJ/+2+H+5Oj+ytP9pbb+w838T3n8a4z8SHX+0Nj9tMH9nbD9jaL8cpH9gJj9kqf9q7r8eZb9u8j9n7L9l678PnH9ip/9r7z8fZf91dv+ztb8M2r+xtD8bpP8H1/9iKb9lqf8JWf9eJn9i6dcNz3RAAALiklEQVR4nO2dC5OiOhOGhQAKouBdxNuoeHfcPe7u//9pHxjUURq0QwY3++WtrTqnamYij7l0d9IdSuq/rpJa+rclCcWXJBRfklB8SULxJQnFlyQUX5JQfElC8SUJxZckFF+SUHxJQvElCcWXJBRfklB8SULxJQnFlyQUX5JQfElC8SUJxZckFF+S8Im0FBFCvvzvne7/PvOnXIQmTDwTVlp2Y1zpImEJtUEr0ibUJNQs1uq0GkdahuqdNY+0jTS6KQiC+fQGQUrjYz/SMVK32z307r6AtxAak3a9QVW/yX2Qc6eKU7mq3F7o18YstamUr1JCNRe1dxPqM1fJpeYXQvNH9eGnzsznvfLhCRs5CXdXQs1YJn489zgD4kdpXsLO7joOiTFM/Hg41bM+vgjCCURYCejKEqqXULT6LMfLMdVscF1pdCs54t2WZ/+NhM7OI8QgxhfpKTJui6XRepyGilJd8R6mnAhb5hfjX4r+PW9Kq/WBproDgxElRWjCTQckZFjkiQd9WY2pyXeY8iGsMBFOHaipP5wtIi9CE//R5ig5DcOJGJT4em5vJFy3gZZCg6nytRfvIyQl2DtyWv8Ioe31oGkYtjXi632jCVucCNV1FwRUlD3fEIoPYRVPqJnNFMLGgqtFxBNCD8ZA6E3SghSnp/Mcpu8iVD+DcgphuVvjOUyxhOSDUx+u9ymAob0YvJUQ7kO0I2It0qMwd8zTXqAJdxBh+Q+yD9X18uzQVB3Ir+nzjC/4jNIytg/tdUC7q1sHmtvztIhv6kNjQKdhe5IM8xWlPqnxiy/eQ2hfbEX3cwQ1t+W4H/WmPvTn57+rjn4uoYl45BhB4QmhiABLSErH89+5M38DramdHb/VFE24AGMeHKFtftAFpm0RArqnY37D9D2E3oyOzaNX8gKovYCfveBEOEEREjI6u2zO0irpK8heNAfchulbCPUpbaQxNUpkCjb4wW0/ihPhDEVY+6DB794gJWKAE7HHbTVFE8JfOWoeakavEv1RZRSGSZoxh2L9ocbL+34HIbEPdBpuoslmtMA95qmFeq50cSJEjVJjQPcJOuftbUOFW+S11OAJwbgOR0jPIMv980gkWlABWuzzCvTfQKjpFKl6ogMRPnR1DU4T8Q2EhNAm3PgkUV+A23e8HLc3EBo7SrSPT5mMwQHYsinzcmveQGjG5mF+MXl6D5qITR/1YKkqnlDzaFxRnnn0o21vA1lEl9N+FJpwkJeQDKh16Cys2DHTQQtUmftcHDdOhKvXCc0VXTqDqznQjBG0d7r/5BJBFU5o+/G+Re8aAtr+CQr0O3zOLwonvHja7uaadBEGxKDjNl7z6EQ8IbQ59jqh7cVu6P6LRScaGF/0f4lIqK5XdM7117d1xPa3UKN7j4fjVjRhKZ6GzvLLToztw47bhMdqWvQ8tGJ72rlLm4Hji/Kcx2qKJlThPnwxJLf9FvVfDuuv3WOvoeQhpctjmBZMWPJoOmJ1dDcA1XUPshcNHkluBRMa6uH8+/WHyEGfQvaiuuQwTIsltL0pXVKaD4GD/Qme6gdm/mFacB+af86/Xu4/BA4ph97NHUMm0oOKJSQa3eF2To/hrTmB4gvnT357gSYswYSv7YzpKg1+61bC5VyDp97bWu5hyolw/Bph7Te1FXvvkVD9BNvd50+KLpSQEOqdVZIZM7Y3hgJ9DknRaELtAI5SM6VCJk6NpgfzxKAOjQOcuxALmojV/NlD/AijxlR1QDWNtIi0C/XRag2iBzXU2FZYQF4XmIxZPuROikYTEpDQSZTN3NfQ0BQZIx6JIyi2NcH4orHIay84ET5TdRlOVGLSv622oFlLfkAT0cm9u18QYSXqQ2JSi1AfgIQ+6Lj18yZFF0So9KzolClOMQEfGi5OyJ8UzYmwORwOD4duqKjO7lxx1w8uiuryNiGUF9AAIiWY1HdQy24r51KDrj+ECXtauICeX5dxKZs8l81Yeq1mhvLM6DF9ulo6v2EbZ4H2ogIuS8UTjr2z1XuoFr0W0ZxlTGlOwj4lC4EQ2K35OwiXzyeL6s/pYjlPCYk0fQU13Vn8FYS954R2nLpe/i8lXrDNH1AE5czzLTXFEZJSM+6TtEQSvQSGwUcrl+NWGKHqnehCEqQGRJo+h9puT3MNUzRhSvrLc8I4Z1ZZpu7V234LattNhMsoFUaoeXSldFupYbttTqEMsJxJbrwIjSdz5ZqOOFTTxxwpgW5N1p88V1GEqh/XbQdZOy9esrg76vZcSdFFEV6yLJ1lVtAO70cp8zyBflGEl5PsZmZRU0qWQP/p95chToTzJ/UD12yEbnZAa0GJ7UojT24NL8Jn37LZO/9eZZRNWFtCw7Q8yzFMC+pDcjmv2GTHQnDhmDLKsW1aDKFd28Wp60R/3Iy7kwU337TZg0Q0oQ4+wvZJH1ozmqx3NDT7UddXMUYhph1Ax2zKgj3bFE94ZCAkhB68VJvdQ6RhpH34L1Y7VrPZrIOEL+6pv4/QUOPpdXfdTvyfV7TXmd0aNKEFEj6pv9Y/ct7bU2EP9LkRZj2BZsyhvVCMJszDFE8IOsfZhESPd2Cq57uibjdIJTbH6/UGPBGPzPEFfh7ChJnFA8Smm72d0+amVusD0uIDTGx3fFaLWEgf6ieauh7UfO8iE1St5ukjaERXdqwWkVcfZhJ6fWorxqaqJszhnULnwALzo8rBmtFx40SYeeWKVqMDz32pmKm2gxLblQ5r4kkRhPoHfebhS2eBxuAIrTWuyjhMeRFmrDS2v6WPvH1tPTTBxPbqlrETi+hDn5rQyumlwlA75caM4c+/lvAW3r+YkgIH+p1khspLwhOCVa0Z55jqekWj2ldvStBMMLHdSd9ozRTeHqIJP+lOdnn+4hPa/hjcjzqyJUV/P+GlWtvdvJpzYH6A9qLNVuvFa5SmbtraXisO719Oh9VMMMp2Z0xJbgyE0CTp22mE4TSMB9nLq726Bidimc1ecCI8pvbhpdPvUtefPJMHXwN7YBqmDPMQRWibCxreNxCly0QH44vGhmVTkdNKk064/o9+I0PEEFN/gUa32mOxF5z6sJs6SmuXW0wQN12o/hLcEwhYdvfxhOAqkEpoxfUZLuoglxjgRGzuGG5a+OY+vKaud9aop/oJWkSHxV58dx/WqK1IpK4/eapP8FOqW4akhW8mvFy1U0Hmbung7a3KnuGmBU6EhxRCaxCnI5o4U6b+AhPb3RZ+yw1v8cGbY4cpZcl6XOY0xBJ+go5b5flZc7KpbyUkhP52GX2LXm0DOm4H/M083AjBeWYQ6pxU0Emimg9OxA7+zQLfTDjNSF3PFnxzpLtCD9PvJdTjm3S3eJ+5BiaeMCRFcyLcg4TEjM8rfuPvRCIWePTWRk/E7yUkcZmTykAIJrYr9UkBfQg5xXtwvzY+r8ja48j6IIjQQSdFo9+ko29fJ/TpeYXyh+VoTB9AhPikaHwfgoRtkNCLy5x+sESu0NsvlOhKxff0YRuah3p8GcRr5xWPIgQMg505staLFyHQh+rlvGLJdn5bA/NplT5y75sTIXjPoR+nrjOWupoD8LwbmxTNrQ+ThMaU7kE1p2w3BBol2K1B+ri8+jBJeN2cD1hz7Y0eOExHuC+MgRByiaH6q9tVO4zn0+Yf0K1Ji9RSxEAI3geUnIckHmT1Ces1lvqiqVSvurzXrNrYoIYpmtDoNdy6++Wda9Fr2OqA16bv9p1QjT7znV2a2uteK+FuxXAjXFoGmpAsTqvTKX5lXvT6vMkmeple8vVHRF2cq4FzXEqmaaqt2qU4SeP2yKh5jSZMeQEi8KEafbNVnkoC8lgOl/ZZGcITfn1vJfZP3yEGQsEkCcWXJBRfklB8SULxJQnFlyQUX5JQfElC8SUJxZckFF+SUHxJQvElCcWXJBRfklB8SULxJQnFlyQUX5JQfElC8SUJxZckFF//F4T/uv4HZ6bu4q09lzwAAAAASUVORK5CYII=",
    floating: true,
};
  return (
    <div className="App">
            <ThemeProvider theme={theme}>
                <ChatBot
 
                    // This appears as the header
                    // text for the chat bot
                    headerTitle="Faballey"
                    steps={steps}
                    {...config}
 
                />
            </ThemeProvider>
        </div>
  )
}

export default Chatbot