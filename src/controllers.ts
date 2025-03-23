import { Response, RequestHandler } from 'express';
import { createNewDesk, desks, findDesk } from "./storage";

export const createDesk: RequestHandler<{}, {}, Parameters<typeof createNewDesk>[0]> = (req, res: Response) => {
    try {
        const { name, description, games } = req.body;
        const desk = createNewDesk({ name, description, games });
        res.status(201).json(desk);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
}

let i = 0;
export const getAllDesks: RequestHandler = (req, res: Response) => {
    i++;
    if (i % 2 === 0) {
        res.status(404).send('404 Not Found');
    } else {
        res.status(200).json(desks);
    }
}

export const getDeskById: RequestHandler<{ desk_id: string }> = (req, res) => {
    const { desk_id } = req.params;
    const desk = findDesk(desk_id);
    if (!desk) {
        res.status(404).json({ error: 'Desk not found' });
        return;
    }
    res.status(200).json(desk);
}
