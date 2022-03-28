export interface UserDto {
    lockoutEnd: string | null;
    twoFactorEnabled: boolean;
    phoneNumberConfirmed: boolean;
    phoneNumber: string;
    concurrencyStamp: string;
    securityStamp: string;
    emailConfirmed: boolean;
    normalizedEmail: string;
    email: string;
    normalizedUserName: string;
    userName: string;
    id: string;
    lockoutEnabled: boolean;
    accessFailedCount: number;
    roles: string;
}