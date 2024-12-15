import { Injectable } from '@nestjs/common'

@Injectable()
export class PirtyService {
  getPirty(id: string, name: string): string {
    return `${id} ${name}: pirty!`
  }
}
