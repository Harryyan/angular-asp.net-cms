import { ValidatorFn, FormGroup } from "@angular/forms";

export const NewOfferValidator: ValidatorFn = (formGroup: FormGroup) => {
  const isRepeatable = formGroup.get('isRespawningOffer').value;
  const respawnStartTime = formGroup.get('respawnStartTime').value;

  if (isRepeatable) {
    return respawnStartTime == null ? { required: true } : null;
  }

  return null;
}

