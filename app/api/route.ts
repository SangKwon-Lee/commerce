import { Client } from '@notionhq/client';
import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string;
};

const notion = new Client({
  auth: 'secret_Xx8NtwAjzfmYKa0rjZzPLYTvB6YteiMfpGbjJqyrOOm'
});

const databaseId = '5d1a92a5cebe4a0fbdcf5ce9a7cf4a81';

const addItem = async (name: string) => {
  try {
    const result = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        title: [
          {
            text: {
              content: name
            }
          }
        ]
      }
    });
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

export default async function POST(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const { name } = req.query;
  if (!name) {
    return res.status(400).json({ message: 'No name' });
  }
  try {
    await addItem(String(name));
    res.status(200).json({ message: 'Hello from Next.js!' });
  } catch (e) {
    console.log(e, 'ASD');
    return res.status(400).json({ message: 'fail to add' });
  }
}
