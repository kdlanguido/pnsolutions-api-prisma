import * as bcrypt from 'bcrypt'

export function hashPassword(raw: string) {
    return bcrypt.hashSync(raw, bcrypt.genSaltSync())
}