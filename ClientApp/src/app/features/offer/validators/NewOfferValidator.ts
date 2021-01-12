import { ValidatorFn, FormGroup } from "@angular/forms";

export const OfferRespawnStartDateValidator: ValidatorFn = (formGroup: FormGroup) => {
  const isRepeatable = formGroup.get('isRespawningOffer').value;
  const respawnStartTime = formGroup.get('respawnStartTime').value;

  if (isRepeatable) {
    return respawnStartTime == null ? { respawnStartTimeRequired: true } : null;
  }

  return null;
}

export const OfferDateValidator: ValidatorFn = (formGroup: FormGroup) => {
  const startDate = formGroup.get('startDateTime').value;
  const endDate = formGroup.get('endDateTime').value;

  if (endDate != null)
  {
    return endDate > startDate ? null : { endDateEarlierThanStartDate: true };  
  }

  return null;
}