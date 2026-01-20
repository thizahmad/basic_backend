import express from 'express'
const app = express()

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Programmer Life",
            joke: "Why do programmers prefer dark mode? Because light attracts bugs."
        },
        {
            id: 2,
            title: "JavaScript",
            joke: "Why did JavaScript break up with HTML? Because it found someone more dynamic."
        },
        {
            id: 3,
            title: "Debugging",
            joke: "Debugging is like being a detective in a crime movie where you are also the criminal."
        },
        {
            id: 4,
            title: "Frontend",
            joke: "I told my CSS to behave, but it still had too much margin."
        },
        {
            id: 5,
            title: "Backend",
            joke: "Why do backend developers love databases? Because they’re great at keeping secrets."
        }
    ];

    res.send(jokes)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log("server running")
})