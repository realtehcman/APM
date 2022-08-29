import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'convertToSpaces'
})
export class ConvertToSpace implements PipeTransform{
    transform(value: any, ...args: any[]) {
        return value.replace(args, ' ')
    }
}