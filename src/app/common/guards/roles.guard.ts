import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { User, UserRole } from "@prisma/client";
import { Observable } from "rxjs";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const requiredRoles: UserRole[] = this.reflector.getAllAndOverride<UserRole[]>('roles', [context.getHandler(), context.getClass()]);

        if (!requiredRoles) {
            return true;
        }

        const { user } = context.switchToHttp().getRequest<{ user: User }>();

        if (requiredRoles.some((role: UserRole) => user.role.includes(role))) {
            return true;
        } else {
            throw new UnauthorizedException();
        }
    }
}