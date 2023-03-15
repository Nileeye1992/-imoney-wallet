import {InjectFlags, InjectionToken, Injector, Type} from '@angular/core';

/** เอาไว้สร้าง instance ของ service หรือ class ที่ injectable ได้ โดยไม่ต้องผ่าน constructor()
 * เหมาะกับพวก static function ซึ่งจะไม่มี constructor ให้เรียก
 */
export class ServiceLocator {
    static injector: Injector;
    /**
     * สร้าง instance
     *
     * Retrieves an instance from the injector based on the provided token.
     * @returns The instance from the injector if defined, otherwise the `notFoundValue`.
     * @throws When the `notFoundValue` is `undefined` or `Injector.THROW_IF_NOT_FOUND`.
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    static get<T>(token: Type<T> | InjectionToken<T>, notFoundValue?: T, flags?: InjectFlags): T {
        return  this.injector ? this.injector.get<T>(token) : null;
    }
}
