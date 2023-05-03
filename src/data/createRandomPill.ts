import type {Pill} from './Pill'
import * as F from './faker'
import * as U from './util'

export const createRandomPill = (): Pill => {
    const code = F.randomId()
    return {
        code,
        image: F.randomImage(),
        name: F.randomName(),
        comments: F.randomParagraphs(),
        caution: F.randomParagraphs(),
        company: F.randomName()
}
}