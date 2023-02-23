const express = require('express');
const router = express.Router();
const { getNotes } = require('../db/getNotes');

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

    var sql = `
        SELECT * FROM notes WHERE 
        grade = '${grade}' AND 
        chapter = '${chapter}' AND 
        chapter_id = '${chapter_id}' 
        AND topic = '${topic}' 
        AND topic_id = '${topic_id}';
    `;
    
    return con.query(sql, (err, result) => {

        if (!err) {
            console.log(notes);
            if (notes.length === 0) {
                return res.status(404).json({
                    error: {
                        message: 'No notes found'
                    }
                });
            }
            res.send('Hello World!');
        } else {
            return res.status(500).json({
                error: {
                    message: 'Internal Server Error'
                }
            });
        }
    
    });
});

module.exports = router;