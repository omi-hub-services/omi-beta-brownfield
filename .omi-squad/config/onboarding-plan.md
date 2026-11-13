# Onboarding plan (existing project)

Workflow: `.omi-squad/workflows/onboarding-takeover.yaml`

## Detected

- Language: javascript
- Package manager: npm
- Test command: `npm test`
- Build command: not detected
- Lint command: not detected

## Next steps

1. Review `project.yaml` and `codebase.yaml`; correct anything detection got wrong.
2. Run `npm test` once and record the baseline result before any change.
3. Run the `onboarding-takeover` workflow to map architecture, risks and first tasks.

Existing files are never overwritten; rerun after editing to see what is kept.
