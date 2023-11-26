import { Prisma } from "@prisma/client";

export class CreateSetupDto implements Prisma.SetupCreateInput {
    cpu: Prisma.CPUCreateNestedOneWithoutSetupsInput;
    gpu: Prisma.GPUCreateNestedOneWithoutSetupsInput;
    hdd: Prisma.HDDCreateNestedOneWithoutSetupsInput;
    case: Prisma.CaseCreateNestedOneWithoutSetupsInput;
    case_fans?: Prisma.CaseFanOfSetupCreateNestedManyWithoutSetupInput;
    cpu_cooler: Prisma.CPUCoolerCreateNestedOneWithoutSetupsInput;
    headphones: Prisma.HeadphonesCreateNestedOneWithoutSetupsInput;
    keyboard: Prisma.KeyboardCreateNestedOneWithoutSetupsInput;
    monitors?: Prisma.MonitorsOfSetupCreateNestedManyWithoutSetupInput;
    motherboard: Prisma.MotherboardCreateNestedOneWithoutSetupsInput;
    mouse: Prisma.MouseCreateNestedOneWithoutSetupsInput;
    ram: Prisma.RAMCreateNestedOneWithoutSetupsInput;
    sound_card: Prisma.SoundCardCreateNestedOneWithoutSetupsInput;
    speakers?: Prisma.SpeakersOfSetupCreateNestedManyWithoutSetupInput;
    thermal_paste: Prisma.ThermalPasteCreateNestedOneWithoutSetupsInput;
    user: Prisma.UserCreateNestedOneWithoutSetupsInput;
    webcam: Prisma.WebcamCreateNestedOneWithoutSetupsInput;
}
