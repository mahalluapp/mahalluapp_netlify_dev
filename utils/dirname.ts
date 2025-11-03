import { fileURLToPath } from 'url';
import path from 'path';

const file_name = fileURLToPath(import.meta.url);
export const current_dir = path.dirname(file_name);