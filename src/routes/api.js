const express = require('express');
const con = require('../db/init');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

/*
    /api/getNotes?grade=grade&chapter=chapter&chapter_id=chapter_id&topic=topic&topic_id=topic_id
*/
router.get('/getNotes', (req, res) => {
    const grade = req.query.grade || null;
    const chapter = req.query.chapter || null;
    const chapter_id = req.query.chapter_id || null;
    const topic = req.query.topic || null;
    const topic_id = req.query.topic_id || null;

    if (grade === null || grade === '') {
        return res.status(400).json({
            error: {
                message: 'parameter grade is required'
            }
        });
    }

    if (chapter === null || chapter === '') {
        return res.status(400).json({
            error: {
                message: 'parameter chapter is required'
            }
        });
    }

    if (chapter_id === null || chapter_id === '') {
        return res.status(400).json({
            error: {
                message: 'parameter chapter_id is required'
            }
        });
    }

    if (topic === null || topic === '') {
        return res.status(400).json({
            error: {
                message: 'parameter topic is required'
            }
        });
    }

    if (topic_id === null || topic_id === '') {
        return res.status(400).json({
            error: {
                message: 'parameter topic_id is required'
            }
        });
    }

    con.query(`SELECT * FROM notes WHERE grade = '${grade}' AND chapter = '${chapter}' AND chapter_id = '${chapter_id}' AND topic = '${topic}' AND topic_id = '${topic_id}';`, (err, result) => {
        if (err) {
            console.log(`Error occured as: ${err.message}`);
            throw err;
        } else {
            console.log(result);
        }
    });
});

module.exports = router;