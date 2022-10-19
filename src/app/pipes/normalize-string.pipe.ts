import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'normalizeString'
})
export class NormalizeStringPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.toLocaleLowerCase().trim()
      .replaceAll(/[àáâãåä]/g, 'a')
      .replaceAll(/[èéêë]/g, 'e')
      .replaceAll(/[ìíîï]/g, 'i')
      .replaceAll(/[òóôõöðø]/g, 'o')
      .replaceAll(/[ùúûü]/g, 'u')
      .replaceAll(/[ñ]/g, 'n')
      .replaceAll(/[ýÿ]/g, 'y')
      .replaceAll(/[ç]/g, 'c')
      .replaceAll(/[æ]/g, 'ae')
      .replaceAll(/[œ]/g, 'oe')
  }

}
