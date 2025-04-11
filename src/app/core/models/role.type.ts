export type Role = 'ADMIN' | 'USER' | 'UNAUTHORIZED';

export function getUserRolesFromString(roleStrings: string[]): Role[] {
  const validRoles: Role[] = ['ADMIN', 'USER', 'UNAUTHORIZED'];

  return roleStrings.map((role) => {
    const upperRole = role.toUpperCase();
    if (validRoles.includes(upperRole as Role)) {
      return upperRole as Role;
    } else {
      throw new Error(`Unknown role: ${role}`);
    }
  });
}
