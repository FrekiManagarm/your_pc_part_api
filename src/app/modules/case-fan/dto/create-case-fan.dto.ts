import { Prisma } from "@prisma/client";

export class CreateCaseFanDto implements Prisma.CaseFanCreateInput {
    airflow?: number[] | Prisma.CaseFanCreateairflowInput;
    color?: string;
    rpm?: number[] | Prisma.CaseFanCreaterpmInput;
    size?: number;
}
