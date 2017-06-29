A simple angular 1.5 implementation of a component based approach to rendering posts with edit/delete functionality.
- Post components are generated based on json data. 
- Each component maintains an isolated scope with delete/edit/add functionality for its comments.
- Updating a post item causes the parent container component to re-render that component.

Some concepts that I've tried to experiment with:
- Single source of truth. (All data to post components is provided by the parent as props/attributes)
- Post components emit events corresponding to the action taken, which are caught at the parent element which handles these events and modifies data, causing a re-render.

# Install 
```
npm install
```

# Start App
```
npm start
```

# Build App
```
npm run build 
```

This will create dist folder which can be deployed in production server
