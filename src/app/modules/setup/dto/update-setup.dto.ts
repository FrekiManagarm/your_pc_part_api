import { PartialType } from '@nestjs/swagger';
import { CreateSetupDto } from './create-setup.dto';
import { Prisma } from '@prisma/client';

export class UpdateSetupDto extends PartialType(CreateSetupDto) implements Prisma.SetupUpdateInput {
    case?: Prisma.CaseCreateNestedOneWithoutSetupsInput;
    case_fans?: Prisma.CaseFanOfSetupCreateNestedManyWithoutSetupInput;
    cpu?: Prisma.CPUCreateNestedOneWithoutSetupsInput;
    cpu_cooler?: Prisma.CPUCoolerCreateNestedOneWithoutSetupsInput;
    gpu?: Prisma.GPUCreateNestedOneWithoutSetupsInput;
    hdd?: Prisma.HDDCreateNestedOneWithoutSetupsInput;
    headphones?: Prisma.HeadphonesCreateNestedOneWithoutSetupsInput;
    keyboard?: Prisma.KeyboardCreateNestedOneWithoutSetupsInput;
    monitors?: Prisma.MonitorsOfSetupCreateNestedManyWithoutSetupInput;
    motherboard?: Prisma.MotherboardCreateNestedOneWithoutSetupsInput;
    mouse?: Prisma.MouseCreateNestedOneWithoutSetupsInput;
    ram?: Prisma.RAMUpdateOneRequiredWithoutSetupsNestedInput;
    sound_card?: Prisma.SoundCardCreateNestedOneWithoutSetupsInput;
    speakers?: Prisma.SpeakersOfSetupCreateNestedManyWithoutSetupInput;
    thermal_paste?: Prisma.ThermalPasteCreateNestedOneWithoutSetupsInput;
    user?: Prisma.UserCreateNestedOneWithoutSetupsInput;
    webcam?: Prisma.WebcamCreateNestedOneWithoutSetupsInput;
}
